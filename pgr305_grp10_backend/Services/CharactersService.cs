using MongoDB.Driver;
using pgr305_grp10_backend.Models;
using System.Linq;
using System.Collections.Generic;

namespace pgr305_grp10_backend.Services {
    public class CharactersService {
        
        private readonly IMongoCollection<Character> _characters;

        public CharactersService(IPs5GamesDatabaseSettings settings) {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );

            _characters = database.GetCollection<Character>( settings.CharactersCollectionName );
        }

        public List<Character> Get() {
            return _characters.Find( character => true ).ToList();
        }

        public Character Get(string id) {
            return _characters.Find( character => character.Id == id ).SingleOrDefault();
        }

        public List<Character> GetByGameId(string id) {
            return _characters.Find( character => character.GameId == id ).ToList();
        }

        public Character Create(Character character) {
            _characters.InsertOne(character);
            return character;
        }

        public void Remove(string id) {
            _characters.DeleteOne( character => character.Id == id );
        }

        public void Update( Character characterIn ) {
            _characters.ReplaceOne( character => character.Id == characterIn.Id , characterIn );
        }
    }
}
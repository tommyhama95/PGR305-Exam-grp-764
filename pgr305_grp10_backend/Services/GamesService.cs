using MongoDB.Driver;
using pgr305_grp10_backend.Models;
using System.Linq;
using System.Collections.Generic;

namespace pgr305_grp10_backend.Services {
    public class GamesService {
        
        private readonly IMongoCollection<Game> _games;

        private readonly CharactersService _charactersService;

        public GamesService(IPs5GamesDatabaseSettings settings) {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );

            _games = database.GetCollection<Game>( settings.GamesCollectionName );

            // CharactersService needs an instance here in order to delete characters related to a deleted game
            _charactersService = new CharactersService(settings);
        }

        public List<Game> Get() {
            return _games.Find( game => true ).ToList();
        }

        public Game Get(string id) {
            return _games.Find( game => game.Id == id ).SingleOrDefault();
        }

        public Game Create(Game game) {
            _games.InsertOne(game);
            return game;
        }

        public void Remove(string id) {
            _charactersService.ClearAll(id);
            _games.DeleteOne( game => game.Id == id );
        }
        
        public void Update( Game gameIn ) {
            _games.ReplaceOne( game => game.Id == gameIn.Id, gameIn );
        }
    }
}
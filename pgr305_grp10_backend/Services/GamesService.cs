using MongoDB.Driver;
using pgr305_grp10_backend.Models;
using System.Linq;
using System.Collections.Generic;

namespace pgr305_grp10_backend.Services {
    public class GamesService {
        
        private readonly IMongoCollection<Game> _games;

        public GamesService(IPs5GamesDatabaseSettings settings) {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );

            _games = database.GetCollection<Game>( settings.GamesCollectionName );
        }

        public List<Game> Get() {
            return _games.Find( game => true ).ToList();
        }

        public Game Get(string id) {
            return _games.Find( game => game.Id == id ).SingleOrDefault();
        }
    }
}
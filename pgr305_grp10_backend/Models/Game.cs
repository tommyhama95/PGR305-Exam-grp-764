using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace pgr305_grp10_backend.Models {
    public class Game {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string CoverImage { get; set; }
        public double Price { get; set; }
        public int PegiRating { get; set; }
    }
}
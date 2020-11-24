using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace pgr305_grp10_backend.Models {
    public class Character {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string GameId { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
    }
}
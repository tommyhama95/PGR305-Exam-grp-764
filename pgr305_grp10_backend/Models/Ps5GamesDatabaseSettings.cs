namespace pgr305_grp10_backend.Models {

    public interface IPs5GamesDatabaseSettings {
        string GamesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class Ps5GamesDatabaseSettings : IPs5GamesDatabaseSettings {
        public string GamesCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
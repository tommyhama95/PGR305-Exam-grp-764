namespace pgr305_grp_10_backend.Models {
    public class Game {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string CoverImage { get; set; }
        public double Price { get; set; }
        public int PegiRating { get; set; }
    }
}
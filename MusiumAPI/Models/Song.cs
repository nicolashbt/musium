namespace MusiumAPI.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string? FilePath { get; set; }
        public int? Duration { get; set; }
        public int? GenreId { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace MusiumAPI.Models
{
    public class SongForm
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string? FilePath { get; set; }
        public int? Duration { get; set; }
        public int? GenreId { get; set; }
        public IEnumerable<int> ArtistIds { get; set; }
    }
}

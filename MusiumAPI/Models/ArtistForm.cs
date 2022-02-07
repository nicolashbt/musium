using System.ComponentModel.DataAnnotations;

namespace MusiumAPI.Models
{
    public class ArtistForm
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}

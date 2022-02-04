using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusiumDAL.Entities
{
    public class SongEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string? FilePath { get; set; }
        public int? Duration { get; set; }
        public int? GenreId { get; set; }
    }
}

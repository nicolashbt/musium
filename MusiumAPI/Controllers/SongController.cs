using Microsoft.AspNetCore.Mvc;
using MusiumAPI.Mappers;
using MusiumAPI.Models;
using MusiumDAL.Repositories;

namespace MusiumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongController : ControllerBase
    {
        private ISongRepository _songRepository;

        public SongController(ISongRepository songRepository)
        {
            _songRepository = songRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_songRepository.GetAllSongs().Select(s => s.MapToApi()));
        }

        [HttpGet("{Id}")]
        public IActionResult GetById(int Id)
        {
            return Ok(_songRepository.GetSong(Id).MapToApi());
        }

        [HttpPost]
        public IActionResult Create(SongForm songForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            _songRepository.AddSong(songForm.MapToDal(), songForm.ArtistIds);
            return Ok();
        }
    }
}

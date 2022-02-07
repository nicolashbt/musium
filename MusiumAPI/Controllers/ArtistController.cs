using Microsoft.AspNetCore.Mvc;
using MusiumAPI.Mappers;
using MusiumAPI.Models;
using MusiumDAL.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MusiumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistController : ControllerBase
    {
        private IArtistRepository _artistRepository;

        public ArtistController(IArtistRepository artistRepository)
        {
            _artistRepository = artistRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_artistRepository.GetAllArtists().Select(a => a.MapToApi()));
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_artistRepository.GetArtist(id).MapToApi());
        }

        [HttpGet("bysong/{id}")]
        public IActionResult GetBySongId(int id)
        {
            return Ok(_artistRepository.GetBySongId(id).Select(a => a.MapToApi()));
        }

        [HttpPost]
        public IActionResult Create(ArtistForm artistForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            _artistRepository.AddArtist(artistForm.MapToDal());
            return Ok();
        }
    }
}

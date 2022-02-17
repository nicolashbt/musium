using Microsoft.AspNetCore.Mvc;
using MusiumAPI.Mappers;
using MusiumAPI.Models;
using MusiumDAL.Repositories;

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
            try
            {
                return Ok(_artistRepository.GetAllArtists().Select(a => a.MapToApi()));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_artistRepository.GetArtist(id).MapToApi());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("bysong/{id}")]
        public IActionResult GetBySongId(int id)
        {
            try
            {
                return Ok(_artistRepository.GetBySongId(id).Select(a => a.MapToApi()));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public IActionResult Update(ArtistForm artistForm)
        {
            if (!ModelState.IsValid) return BadRequest(new { response = "Form is not valid." });
            try
            {
                _artistRepository.UpdateArtist(artistForm.MapToDal());
                return Ok(new { response = "Update succeeded" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Create(ArtistForm artistForm)
        {
            if (!ModelState.IsValid) return BadRequest(new { response = "Form is not valid." });
            try
            {
                int id = _artistRepository.AddArtist(artistForm.MapToDal());
                return Ok(new { response = id });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

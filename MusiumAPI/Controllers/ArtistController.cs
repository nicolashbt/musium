using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "user")]
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "user")]
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "user")]
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
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

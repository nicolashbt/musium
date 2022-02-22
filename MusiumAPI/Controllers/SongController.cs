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
    public class SongController : ControllerBase
    {
        private ISongRepository _songRepository;

        public SongController(ISongRepository songRepository)
        {
            _songRepository = songRepository;
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "user")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_songRepository.GetAllSongs().Select(s => s.MapToApi()));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{Id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "user")]
        public IActionResult GetById(int Id)
        {
            try
            {
                return Ok(_songRepository.GetSong(Id).MapToApi());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public IActionResult Create(SongForm songForm)
        {
            if (!ModelState.IsValid) return BadRequest(new { response = "Form is not valid." });
            try
            {
                _songRepository.AddSong(songForm.MapToDal(), songForm.ArtistIds);
                return Ok(new { response = "Create succeeded" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public IActionResult Update(SongForm songForm)
        {
            if (!ModelState.IsValid) return BadRequest(new { response = "Form is not valid." });
            try
            {
                _songRepository.UpdateSongWithArtists(songForm.MapToDal(),songForm.ArtistIds);
                return Ok(new { response = "Update succeeded" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("ArtistSong")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public IActionResult UpdateArtistSong(SongForm songForm)
        {
            if (!ModelState.IsValid) return BadRequest(new { response = "Form is not valid." });
            try
            {
                _songRepository.UpdateArtistSong(songForm.MapToDal().Id, songForm.ArtistIds);
                return Ok(new { response = "Update succeeded" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{Id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public IActionResult Delete(int Id)
        {
            try
            {
                _songRepository.DeleteSong(Id);
                return Ok(new { response = "Delete succeeded" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}

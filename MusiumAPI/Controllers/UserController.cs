using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MusiumAPI.Mappers;
using MusiumAPI.Models.UserModels;
using MusiumDAL.Repositories;

namespace MusiumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }
        [HttpPost("login")]
        public IActionResult Login(LoginForm loginForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            try
            {
                User CurrentUser = _userRepository.Login(loginForm.Nickname, loginForm.Password).MapToApi();
                return Ok(CurrentUser);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
        [HttpPost("register")]
        public IActionResult Register(RegisterForm registerForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            try
            {
                int Id = _userRepository.Register(registerForm.MapToDal());
                return Ok("Registration Succeeded");
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MusiumAPI.Mappers;
using MusiumAPI.Models.UserModels;
using MusiumAPI.Tools;
using MusiumDAL.Repositories;

namespace MusiumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly TokenManager _token;
        public UserController(IUserRepository userRepository, TokenManager tokenManager)
        {
            this._userRepository = userRepository;
            this._token = tokenManager;
        }
        [HttpPost("login")]
        public IActionResult Login(LoginForm loginForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            try
            {
                User CurrentUser = _userRepository.Login(loginForm.Nickname, loginForm.Password).MapToApi();
                CurrentUser.Token = _token.GenerateJwt(CurrentUser);
                return Ok(CurrentUser);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPost("register")]
        public IActionResult Register(RegisterForm registerForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            try
            {
                int Id = _userRepository.Register(registerForm.MapToDal());
                return Ok(new { response = "Registration succeeded" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}

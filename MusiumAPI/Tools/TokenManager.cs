using Microsoft.IdentityModel.Tokens;
using MusiumAPI.Models.UserModels;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace MusiumAPI.Tools
{
    public class TokenManager
    {
        public static string SecretKey = "4kAAryzqDkKW7q*f7.6pZUv7nvoTLGad9wVh_rdMTN9!rhHj-GtxRL2-_iN";

        public string GenerateJwt(User currentUser)
        {
            if (currentUser.Nickname == null)
            {
                throw new ArgumentNullException();
            }
            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));
            SigningCredentials signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512);
            Claim[] claims = new[]
            {
                new Claim(ClaimTypes.Name,currentUser.Nickname),
                new Claim(ClaimTypes.Role,GetRole(currentUser)),
                new Claim("UserId", currentUser.Id.ToString())
            };
            JwtSecurityToken token = new JwtSecurityToken(
                claims: claims,
                signingCredentials: signingCredentials,
                expires: DateTime.Now.AddMinutes(180)
                );
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }
        public string GetRole(User user)
        {
            if (user.Role == 1) return "admin";
            else if (user.Role == 3) return "user";
            else return "role not found";
        }
    }
}

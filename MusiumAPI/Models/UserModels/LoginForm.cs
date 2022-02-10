using System.ComponentModel.DataAnnotations;

namespace MusiumAPI.Models.UserModels
{
    public class LoginForm
    {
        [Required]
        [Display(Name = "Nickname")]
        public string Nickname { get; set; }
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}

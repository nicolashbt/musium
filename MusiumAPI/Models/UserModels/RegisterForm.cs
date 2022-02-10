using System.ComponentModel.DataAnnotations;

namespace MusiumAPI.Models.UserModels
{
    public class RegisterForm
    {
        [Required]
        [Display(Name = "Nickname")]
        public string Nickname { get; set; }
        [Required]
        [EmailAddress]
        [Display(Name = "Email Adress")]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Repeat Password")]
        public string RepeatPassword { get; set; }
    }
}

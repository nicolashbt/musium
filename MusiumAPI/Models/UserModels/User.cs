namespace MusiumAPI.Models.UserModels
{
    public class User
    {
        public int Id { get; set; }
        public string Nickname { get; set; }
        public string Email { get; set; }
        //public string Password { get; set; }
        public int Role { get; set; }
        public string Token { get; set; }
    }
}

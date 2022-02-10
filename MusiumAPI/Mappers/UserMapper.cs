using DAL = MusiumDAL.Entities;
using API = MusiumAPI.Models.UserModels;

namespace MusiumAPI.Mappers
{
    public static class UserMapper
    {
        public static DAL.UserEntity MapToDal(this API.RegisterForm user)
        {
            return new DAL.UserEntity
            {
                Nickname = user.Nickname,
                Password = user.Password,
                Email = user.Email
            };
        }
        public static API.User MapToApi(this DAL.UserEntity user)
        {
            return new API.User
            {
                Id = user.Id,
                Nickname = user.Nickname,
                Email = user.Email,
                Role = user.Role
            };
        }
    }
}

using MusiumDAL.Entities;
using MusiumDAL.Repositories;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusiumDAL.Services
{
    public class UserService : IUserRepository
    {
        private string _winAuthConnectionString
            = @"Data Source=DESKTOP-90GHBCB;Initial Catalog=MusiumDB;Integrated Security=True;Connect Timeout=60;";

        public int Register(UserEntity userEntity)
        {
            using (SqlConnection c = new SqlConnection())
            {
                c.ConnectionString = _winAuthConnectionString;
                using (SqlCommand cmd = c.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = "UserRegister";
                    cmd.Parameters.AddWithValue("email", userEntity.Email);
                    cmd.Parameters.AddWithValue("password", userEntity.Password);
                    cmd.Parameters.AddWithValue("nickname", userEntity.Nickname);

                    try
                    {
                        c.Open();
                        return (int)cmd.ExecuteScalar();
                    }
                    catch (SqlException e)
                    {
                        throw new Exception(e.Message);
                    }
                }
            }
        }
        public UserEntity Login(string nickname, string password)
        {
            UserEntity userEntity = new UserEntity();
            using (SqlConnection c = new SqlConnection())
            {
                c.ConnectionString = _winAuthConnectionString;
                using (SqlCommand cmd = c.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = "UserLogin";
                    cmd.Parameters.AddWithValue("nickname", nickname);
                    cmd.Parameters.AddWithValue("password", password);

                    try
                    {
                        c.Open();
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                userEntity.Id = (int)reader["id"];
                                userEntity.Nickname = (string)reader["nickname"];
                                userEntity.Email = (string)reader["email"];
                                userEntity.Role = (int)(reader["role"]);
                            }
                        }
                        return userEntity;
                    }
                    catch (SqlException e)
                    {
                        throw new Exception(e.Message);
                    }
                }
            }
        }
    }
}


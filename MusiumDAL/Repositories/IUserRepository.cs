using MusiumDAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusiumDAL.Repositories
{
    public interface IUserRepository
    {
        UserEntity Login(string nickname, string password);
        int Register(UserEntity userEntity);
    }
}

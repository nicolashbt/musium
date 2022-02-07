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
    public class SongService : ISongRepository
    {
        private string _winAuthConnectionString
            = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=MusiumDB;Integrated Security=True;Connect Timeout=60;";
        
        public void AddSong(SongEntity songEntity, IEnumerable<int> artistIds)
        {
            using (SqlConnection c = new SqlConnection())
            {
                c.ConnectionString = _winAuthConnectionString;
                using (SqlCommand cmd = c.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = "AddSongWithArtist";
                    cmd.Parameters.AddWithValue("name", songEntity.Name);
                    cmd.Parameters.AddWithValue("isActive", songEntity.IsActive);
                    cmd.Parameters.AddWithValue("filePath", songEntity.FilePath);
                    cmd.Parameters.AddWithValue("duration", songEntity.Duration);
                    cmd.Parameters.AddWithValue("genreId", songEntity.GenreId);

                    //@artistId T_ArtistId READONLY
                    DataTable ArtistIds = new DataTable();
                    ArtistIds.Columns.Add("id", typeof(int));
                    foreach (int artistId in artistIds)
                    {
                        ArtistIds.Rows.Add(artistId);
                    }
                    cmd.Parameters.Add(new SqlParameter("artistId", ArtistIds));

                    try
                    {
                        c.Open();
                        int Id = (int)cmd.ExecuteNonQuery();
                        Console.WriteLine(Id);
                    }
                    catch (SqlException e)
                    {
                        throw new Exception(e.Message);
                    }
                }
            }
        }
        public void DeleteSong(int id)
        {
            throw new NotImplementedException();
        }
        public IEnumerable<SongEntity> GetAllSongs()
        {
            List<SongEntity> SongList = new List<SongEntity>();
            using (SqlConnection c = new SqlConnection())
            {
                c.ConnectionString = _winAuthConnectionString;
                using (SqlCommand cmd = c.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM Song";
                    try
                    {
                        c.Open();
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                SongList.Add(new SongEntity()
                                {
                                    Id = (int)reader["Id"],
                                    Name = (string)reader["name"],
                                    IsActive = (bool)reader["IsActive"]
                                });
                            }
                        }
                    }
                    catch (SqlException e)
                    {
                        throw new Exception(e.Message);
                    }
                }
            }
            return SongList;
        }
        public SongEntity GetSong(int id)
        {
            throw new NotImplementedException();
        }
        public void UpdateSong(SongEntity songEntity)
        {
            throw new NotImplementedException();
        }
    }
}

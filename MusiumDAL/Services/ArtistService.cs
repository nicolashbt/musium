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
    public class ArtistService : IArtistRepository
    {
        private string _winAuthConnectionString
            = @"Data Source=DESKTOP-90GHBCB;Initial Catalog=MusiumDB;Integrated Security=True;Connect Timeout=60;";

        public IEnumerable<ArtistEntity> GetBySongId(int songId)
        {
            List<ArtistEntity> artists = new List<ArtistEntity>();
            using (SqlConnection c = new SqlConnection())
            {
                c.ConnectionString = _winAuthConnectionString;
                using (SqlCommand cmd = c.CreateCommand())
                {
                    cmd.CommandText = "Select a.* From ArtistSong ars Join Artist a ON ars.ArtistId = a.Id WHERE SongId = @SongId;";
                    cmd.Parameters.AddWithValue("SongId", songId);
                    try
                    {
                        c.Open();
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                artists.Add(new ArtistEntity()
                                {
                                    Id = (int)reader["Id"],
                                    Name = (string)reader["name"]
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
            return artists;
        }

        public int AddArtist(ArtistEntity artistEntity)
        {

            using (SqlConnection c = new SqlConnection())
            {
                c.ConnectionString = _winAuthConnectionString;
                using (SqlCommand cmd = c.CreateCommand())
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = "AddArtist";
                    cmd.Parameters.AddWithValue("name", artistEntity.Name);
                    SqlParameter POutputId = new SqlParameter()
                    {
                        ParameterName = "id",
                        Value = 0,
                        Direction = ParameterDirection.Output
                    };
                    cmd.Parameters.Add(POutputId);

                    try
                    {
                        c.Open();
                        cmd.ExecuteNonQuery();
                        int OutputId = (int)cmd.Parameters["id"].Value;
                        return OutputId;
                    }
                    catch (SqlException e)
                    {
                        throw new Exception(e.Message);
                    }
                }
            }
        }

        public ArtistEntity GetArtist(int id)
        {
            ArtistEntity artist = new ArtistEntity();
            using (SqlConnection c = new SqlConnection())
            {
                c.ConnectionString = _winAuthConnectionString;
                using (SqlCommand cmd = c.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM Artist WHERE Id = @id";
                    cmd.Parameters.AddWithValue("id", id);
                    try
                    {
                        c.Open();
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                artist.Id = (int)reader["Id"];
                                artist.Name = (string)reader["name"];
                            }
                        }
                    }
                    catch (SqlException e)
                    {
                        throw new Exception(e.Message);
                    }
                }
            }
            return artist;
        }
        public IEnumerable<ArtistEntity> GetAllArtists()
        {
            List<ArtistEntity> artists = new List<ArtistEntity>();
            using (SqlConnection c = new SqlConnection())
            {
                c.ConnectionString = _winAuthConnectionString;
                using (SqlCommand cmd = c.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM Artist";
                    try
                    {
                        c.Open();
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                artists.Add(new ArtistEntity()
                                {
                                    Id = (int)reader["Id"],
                                    Name = (string)reader["name"]
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
            return artists;
        }
    }
}

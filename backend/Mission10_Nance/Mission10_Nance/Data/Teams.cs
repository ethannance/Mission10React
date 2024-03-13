using System.ComponentModel.DataAnnotations;

namespace Mission10_Nance.Data
{
    public class Teams
    {
        [Key]
        public int TeamID { get; set; }
        public string TeamName { get; set; } = null!;
        public int? CaptainID { get; set; }
    }
}

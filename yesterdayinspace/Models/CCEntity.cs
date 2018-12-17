using System;
using System.ComponentModel.DataAnnotations;

namespace yesterdayinspace.Models
{
    public class CCEntity
    {
        public int ID { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
		public string AltRole { get; set; }
        public string ThumbImg { get; set; }
        public string BioImg { get; set; }
        public string BioText { get; set; }
    }
}

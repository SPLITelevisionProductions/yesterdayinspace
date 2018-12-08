using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace yesterdayinspace.Pages
{
    public class CastCrewModel : PageModel
    {
        public void OnGet()
        {
        }
    }

    public class CastMember
    {
        public string Name { get; set; }
        public string CharName { get; set; }
        public string ThumbImg { get; set; }
        public string Bio { get; set; }
        public CastMember(string name, string charname, string thumb, string bio)
        {
            Name = name;
            CharName = charname;
            ThumbImg = thumb;
            Bio = bio;
        }
    }

    public class CrewMember
    {
        public string Name { get; set; }
        public string ThumbImg { get; set; }
        public string Bio { get; set; }
        public CrewMember(string name, string thumb, string bio)
        {
            Name = name;
            ThumbImg = thumb;
            Bio = bio;
        }
    }

    public class SponsorComp
    {
        public string Name { get; set; }
        public string ThumbImg { get; set; }
        public string FullImg { get; set; }
        public string Bio { get; set; }
        public SponsorComp(string name, string thumb, string full, string bio)
        {
            Name = name;
            ThumbImg = thumb;
            FullImg = full;
            Bio = bio;
        }
    }
}
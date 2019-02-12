using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using yesterdayinspace.Models;

namespace yesterdayinspace.Pages.HPContents
{
    public class HPContentsModel : PageModel
    {
        private readonly yesterdayinspace.Models.YISContext _context;

        public HPContentsModel(yesterdayinspace.Models.YISContext context)
        {
            _context = context;
        }

        public IList<HPContent> HPContent { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            IQueryable<HPContent> News = from s in _context.HPContent
                                            select s;

            News = News.OrderByDescending(s => s.ID);

            HPContent = await News.AsNoTracking().ToListAsync();

            return new JsonResult(HPContent);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using yesterdayinspace.Models;

namespace yesterdayinspace.Pages.APContents
{
    public class APContentsModel : PageModel
    {
        private readonly yesterdayinspace.Models.YISContext _context;

        public APContentsModel(yesterdayinspace.Models.YISContext context)
        {
            _context = context;
        }

        public APContent APContent { get; set; }

        public async Task<IActionResult> OnGetAsync(int? view)
        {
            if (view == null)
            {
                return NotFound();
            }

            APContent = await _context.APContent.FirstOrDefaultAsync(m => m.ID == view);

            if (APContent == null)
            {
                return NotFound();
            }
            return new JsonResult(APContent);
        }
    }
}
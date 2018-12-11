using Microsoft.EntityFrameworkCore;
namespace yesterdayinspace.Models
{
    public class YISContext : DbContext
    {
        public YISContext(DbContextOptions<YISContext> options)
            : base(options)
        {
        }

        public DbSet<yesterdayinspace.Models.CCEntity> CCEntity { get; set; }
    }
}

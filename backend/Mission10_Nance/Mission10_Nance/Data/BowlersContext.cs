using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

using Microsoft.EntityFrameworkCore;

namespace Mission10_Nance.Data

{
    public class BowlersContext: DbContext

    {
        public BowlersContext(DbContextOptions < BowlersContext > options) : base(options) { }

        public DbSet<Bowlers> Bowlers { get; set; }

    }


}


using Microsoft.EntityFrameworkCore;

namespace Mission10_Nance.Data
{
    public class EFBowlersRepository : IBowlersRepository
    {
        private BowlersContext _bowlersContext;

        public EFBowlersRepository(BowlersContext temp)
        {
            _bowlersContext = temp;
        }

        public IEnumerable<Bowlers> Bowlers => _bowlersContext.Bowlers.Include("Team");
    }
}

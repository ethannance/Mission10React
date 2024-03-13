using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_Nance.Data;

namespace Mission10_Nance.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlersController : ControllerBase
    {
        private IBowlersRepository _bowlersRepository;

        public BowlersController(IBowlersRepository temp)
        {
            _bowlersRepository = temp;
        }

        public IEnumerable<Teams> TeamsData { get; private set; }

        [HttpGet]
        public IEnumerable<Bowlers> Get()
        {
            var bowlersData = _bowlersRepository.Bowlers
                .Where(x => x.TeamID == 1 || x.TeamID == 2)
                .ToArray();

            return bowlersData;
        }
    }
}

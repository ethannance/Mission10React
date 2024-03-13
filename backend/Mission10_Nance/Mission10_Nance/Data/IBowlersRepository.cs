namespace Mission10_Nance.Data
{
    public interface IBowlersRepository
    {
        IEnumerable<Bowlers> Bowlers { get; }
    }
}

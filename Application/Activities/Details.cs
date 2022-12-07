using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using System.Diagnostics.CodeAnalysis;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                try
                {
                    var result = await _context.Activities.FindAsync(request.Id);

                    if (result is null)
                        throw new NullReferenceException();
                    return result;
                }
                catch (NullReferenceException)
                {
                    return null;
                }
            }
        }
    }
}

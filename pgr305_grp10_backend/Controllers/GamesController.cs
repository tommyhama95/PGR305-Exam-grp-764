using Microsoft.AspNetCore.Mvc;
using pgr305_grp10_backend.Models;
using pgr305_grp10_backend.Services;
using System.Collections.Generic;

namespace pgr305_grp10_backend.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase {
        private readonly GamesService _gamesService;

        public GamesController(GamesService gamesService) {
            _gamesService = gamesService;
        }

        [HttpGet]
        public ActionResult<List<Game>> Get(){
            return _gamesService.Get();
        }

        [HttpGet]
        [Route("{id}")]
        public Game Get(string id){
            return _gamesService.Get(id);
        }
    }
}
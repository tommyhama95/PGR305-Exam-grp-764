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

                [HttpPost]
        public ActionResult<Game> Create(Game game) {
            _gamesService.Create(game);
            return game;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id) {
            var game = _gamesService.Get(id);

            if ( game == null ) {
                return NotFound();
            }

            _gamesService.Remove( game.Id );
            return NoContent();
        }

        [HttpPut]
        public IActionResult Put(Game gameIn) {
            var game = _gamesService.Get(gameIn.Id);

            if( game == null ) {
                return NotFound();
            }

            _gamesService.Update( game );
            return NoContent();
        }
    }
}
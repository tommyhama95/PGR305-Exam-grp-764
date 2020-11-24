using Microsoft.AspNetCore.Mvc;
using pgr305_grp10_backend.Models;
using pgr305_grp10_backend.Services;
using System.Collections.Generic;

namespace pgr305_grp10_backend.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase {
        private readonly CharactersService _charactersService;

        public CharactersController(CharactersService charactersService) {
            _charactersService = charactersService;
        }

        [HttpGet]
        public ActionResult<List<Character>> Get(){
            return _charactersService.Get();
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Character> Get(string id){
            return _charactersService.Get(id);
        }

        [HttpPost]
        public ActionResult<Character> Create(Character character) {
            _charactersService.Create(character);
            return character;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id) {
            var character = _charactersService.Get(id);

            if ( character == null ) {
                return NotFound();
            }

            _charactersService.Remove( character.Id );
            return NoContent();
        }
        
        [HttpPut]
        public IActionResult Put(Character characterIn) {
            var character = _charactersService.Get(characterIn.Id);

            if( character == null ) {
                return NotFound();
            }

            _charactersService.Update( character );
            return NoContent();
        }
        
    }
}
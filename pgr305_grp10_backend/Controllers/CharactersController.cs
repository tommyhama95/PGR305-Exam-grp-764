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
        public Character Get(string id){
            return _charactersService.Get(id);
        }
    }
}
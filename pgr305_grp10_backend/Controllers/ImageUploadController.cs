using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace pgr305_grp10_backend.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class ImageUploadController : ControllerBase {

        private readonly IWebHostEnvironment _hosting;

        public ImageUploadController (IWebHostEnvironment hosting) {
            _hosting = hosting;
        }

        [HttpGet]
        public string Get() {
            return "Sup dude";
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult UploadImage( IFormFile file ) {
            string wwwrootPath = _hosting.ApplicationName;
            string absolutePath = Path.Combine($"{wwwrootPath}/images/{Path.GetRandomFileName()}");

            // Check if the received file is an image, otherwise do nothing
            if( FormFileExtensions.IsImage(file) ) {
                    return BadRequest(); // The sent file is not an image
                }

            using(var fileStream = new FileStream(absolutePath, FileMode.Create)){
                file.CopyTo( fileStream );
            }

            return Ok(); 
        }
    }
}
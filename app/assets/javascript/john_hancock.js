<script src="https://cdnjs.cloudflare.com/ajax/libs/signature_pad/4.1.7/signature_pad.umd.min.js" integrity="sha512-5KVKd2m3yToOC3/2aqO7vbLn5qWWsrZrJFhpqPBdngWgSKf7CIgo9OURGlcooN9LaG0kYRb5gUAMYtPFyftMcQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById("JohnHancock-canvas");
  const hidden_field = document.getElementById("JohnHancock-hidden");

  if (canvas && hidden_field) {
    const parent_form = canvas.closest("form");
    const signaturePad = new SignaturePad(canvas);

    parent_form.onsubmit = function() {
      hidden_field.value = signaturePad.toDataURL()
    }

    function resizeCanvas() {
      var ratio =  Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
      signaturePad.clear();
    }

    window.addEventListener("resize", resizeCanvas, true);
    resizeCanvas();
  }
}, false)

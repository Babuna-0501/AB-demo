        function BlurPreview(element) {
          var isIE = window.navigator.userAgent.indexOf('MSIE') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
            var _this = element;
        var small = _this.querySelector('img');
        if (small.classList.contains('img-blur')) {
          if (isIE) {
            var pictureTag = document.createElement('picture');
            var sourceTag = document.createElement('source');
            var imgTag = document.createElement('img');
            sourceTag.setAttribute('srcset', _this.dataset.large);
            imgTag.setAttribute('src', _this.dataset.small);
            imgTag.setAttribute('style', 'width:100%');
            pictureTag.appendChild(sourceTag);
            pictureTag.appendChild(imgTag);
            _this.parentNode.replaceChild(pictureTag, _this);  
          } else {
              var img = new Image();
              if (window.innerWidth < 768) {
                img.src = _this.querySelector('img').getAttribute('src');
              } else {
                img.src = _this.querySelector('source').getAttribute('srcset');
              }
              
              img.onload = function () {
                
                    var large = new Image();
                    if (window.innerWidth < 768) {
                        large.src = _this.dataset.small; 
                      } else {
                        large.src = _this.dataset.large; 
                      }
                      large.onload = function () {
                        
                          large.classList.add('loaded');
                          _this.querySelector('source').setAttribute('srcset', _this.dataset.large); 
                          _this.querySelector('img').setAttribute('src', _this.dataset.small);                          
                        
                        large.onload=null;
                      };
                
                  img.onload=null;
              };
            }
          }
        }

      var blurPrivewImgs = document.querySelectorAll('.blurload');
      for (var i=0;i<blurPrivewImgs.length;i++) {
        new BlurPreview(blurPrivewImgs[i]);
      }
       
      
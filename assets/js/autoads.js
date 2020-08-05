(function ($) {
  var IN_ARTICLE_ADUNIT_TEMPLATE = "<ins class='adsbygoogle in-arcticle-ad' style='display:block; text-align:center;' data-ad-layout='in-article' data-ad-format='fluid' data-ad-client='ca-pub-8680819658304309' data-ad-slot='{AD_SLOT_ID}'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>";

  function getAd(adSlotID) {
    return $(IN_ARTICLE_ADUNIT_TEMPLATE.replace(/{AD_SLOT_ID}/, adSlotID));
  }

  var embedAds = function(){
    var inArticle = [getAd(9057254562), getAd(5023528837), getAd(2932907338), getAd(5826378570), getAd(4869833202)];
    $("h2,.hk-autoads").not('.post-card__title,.post__title').each(function(i, ele){
      if (i < inArticle.length) {
        inArticle[i].insertBefore(ele);
      }
    });
  }

  $(function(){
    embedAds();
  });
}(jQuery));

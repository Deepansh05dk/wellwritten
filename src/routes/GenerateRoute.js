import React from "react";
import Generate from "../containers/Generate/Generate";
import { Route, Redirect } from "react-router-dom";
import AmazonDescResultbox from "../Components/Generate/GenerateBody/ResultBox/AmazonDesc/AmazonDescResultbox";
import AmazonDesc from "../Components/Generate/GenerateBody/GenerateSidebar/AmazonDesc/AmazonDesc";
import LinkedlnResultbox from "../Components/Generate/GenerateBody/ResultBox/LinkedlnAd/LinkedlnResultbox";
import LinkedlnAd from "../Components/Generate/GenerateBody/GenerateSidebar/LinkedlnAd/LinkedlnAd";
import CommonResultbox from "../Components/Generate/GenerateBody/ResultBox/Common/CommonResultbox";
import Caption from "../Components/Generate/GenerateBody/GenerateSidebar/Captions/Captions";
import GoogleAdResultbox from "../Components/Generate/GenerateBody/ResultBox/GoogleAd/GoogleAdResultBox";
import GoogleAd from "../Components/Generate/GenerateBody/GenerateSidebar/GoogleAd/GoogleAd";
import InstagramAd from "../Components/Generate/GenerateBody/GenerateSidebar/InstagramAd/InstagramAd";
import InstragramAdResultbox from "../Components/Generate/GenerateBody/ResultBox/InstagramAd/InstagramAdResultbox";
import SEOMetatag from "../Components/Generate/GenerateBody/GenerateSidebar/SEOMetatag/SEOMetatag";
import SEOMetatagResultbox from "../Components/Generate/GenerateBody/ResultBox/SEOMetatag/SEOMetatagResultbox";

function GenerateRoute() {
  return (
    <>
      <Route exact path="/generate">
        <Redirect to="/home"></Redirect>
      </Route>
      <Route exact path="/generate/amazondesc">
        <Generate
          resultBox={<AmazonDescResultbox />}
          sidebar={<AmazonDesc />}
          header="Amazon Product Description"
        />
      </Route>
      <Route exact path="/generate/caption">
        <Generate
          resultBox={<CommonResultbox />}
          sidebar={<Caption />}
          header="Captions"
        />
      </Route>
      <Route exact path="/generate/instagramAd">
        <Generate
          resultBox={<InstragramAdResultbox />}
          sidebar={<InstagramAd />}
          header="Instagram Ad"
        />
      </Route>
      <Route exact path="/generate/linkedlnAd">
        <Generate
          resultBox={<LinkedlnResultbox />}
          sidebar={<LinkedlnAd />}
          header="Linkedln Ad"
        />
      </Route>
      <Route exact path="/generate/googleAd">
        <Generate
          resultBox={<GoogleAdResultbox />}
          sidebar={<GoogleAd />}
          header="Google Ad"
        />
      </Route>
      <Route exact path="/generate/SEOmetatag">
        <Generate
          resultBox={<SEOMetatagResultbox />}
          sidebar={<SEOMetatag />}
          header="SEO Metatag"
        />
      </Route>
      <Route exact path="/generate/taglines">
        <Generate
          resultBox={<CommonResultbox />}
          sidebar={<></>}
          header="SEO Metatag"
        />
      </Route>
    </>
  );
}

export default GenerateRoute;

# Using FSI Viewer for Image Zoom

This readme describes how the detail page example is achieved using _FSI Viewer_.
The aim of the demo is to show how you can easily integrate images with zoom by just adding a simple viewer tag.

# Use Zoom on the website

With an image selected, you can see all the possible publishing options for that particular item by going to the Publish To Web tab.
For this example, select the _FSI Viewer - White Skin_ preset in the _Zoom & Pan_ section:

![Config Image](readme-simple-product-zoom-1.png)

The Source Code section allows you to control the appearance of your viewer by setting the dimensions and format, as well as adding effects or cropping options.
This section also displays the source code for your chosen publishing option, which you can edit and copy to publish the images.
You will also see the necessary scripts that need to be embedded in the page.

![Config Image](readme-simple-product-zoom-2.png)

To display zoom with FSI Viewer, all you need to do is add the script
at the top of your website:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/viewer/js/fsiviewer.js'
</script>
```

This will ensure that the FSI Viewer is loaded.

Next, you need to place the _<fsi-viewer>_ tag you see in the Publish section where you want the viewer to appear.
In our example this looks like this:

```html
<fsi-viewer
  id="fsi-viewer"
  src="images/samples/Shoe/View2/sneaker-both-13.jpg"
  width="100%"
  height="100%"
  plugins="resize,fullScreen"
  skin="example"
>
</fsi-viewer>
```

For all the parameters that can be used, please refer to the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.

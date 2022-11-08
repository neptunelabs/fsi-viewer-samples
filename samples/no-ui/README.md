# Using FSI Viewer for Image Zoom - No Interface

This readme describes how the detail page sample with *FSI Viewer* is achieved while using no interface.
The aim of the demo is to show how you can easily integrate images with zoom by just adding
a simple viewer tag.

# Add zoom to the website

While having an image selected, you can see all possible publishing ways for the specific item by visting the Publish To Web tab.
For this example, select the preset *FSI Viewer - no UI* in the section *Zoom & Pan*:

![Config Image](readme-no-ui-1.png)

The *Source Code* section enables you to control the look of your viewer by setting the dimensions and format, as well as adding effects or crop options to it.
In this area you also can see the source code for your selected publishing option which you can edit and copy to publish the images.
You also see the required scripts which need to be embedded on the site.

![Config Image](readme-no-ui-2.png)

In order to display zoom with FSI Viewer, you only need to add the corresponding script
to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/viewer/js/fsiviewer.js'
</script>
```
This ensures that FSI Viewer is loaded.

Afterwards, you need to place the *<fsi-viewer>* tag you see in the Publish section on the place where you would like to see the viewer.
In our example this will look like this:

```html
 <fsi-viewer id="image"
             src="images/samples/showcase/pdp/kate-skumen-glmDobIx4o0-unsplash.jpg"
             width="100%"
             height="100%"
             plugins="resize,fullScreen"
             hideUI="true"
             backgroundColor="#f8f9fa"
             style="position:relative;"
>
</fsi-viewer>
```
## Displaying the viewer without interface
For ensuring that no interface is shown, you'll need to add **hideUI="true"** to the parameter list as seen above.

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.

import { BlogPost } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

const post: BlogPost = {
  slug: 'feat-viz',
  title: 'Feature Visualization for Mechanistic Interpretability',
  date: '2025-06-24',
  excerpt:
    'Investigating feature representation in AlexNet and developing a feature visualization pipeline to understand neural network interpretability.',
  projectId: 'feat-viz',
  content: (
    <>
      <p>
        My code is available on{' '}
        <Link
          href="https://github.com/oliveryun11/feat-viz"
          className="inline-flex items-center hover:text-foreground text-foreground-secondary transition-colors duration-200"
        >
          GitHub
          <HiArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
        . This project was done with reference to{' '}
        <Link
          href="https://distill.pub/2017/feature-visualization/"
          className="inline-flex items-center hover:text-foreground text-foreground-secondary transition-colors duration-200"
        >
          Olah&apos;s article on feature visualization
          <HiArrowUpRight className="w-4 h-4" />
        </Link>
        .
      </p>

      <p>
        Mechanistic Interpretability (MI) is a field of study that seeks to
        understand the internal workings of neural networks. This is done by
        identifying the specific algorithms and representations the network uses
        to produce its outputs. Feature visualization is one method of MI used
        to understand models that take images as input. In this blog, we apply
        feature visualization to the AlexNet model with the goal of
        understanding on a deeper level how CNNs work, verifying the established
        theory of hierarchical feature detection and finding evidence of
        polysemanticality.
      </p>

      <h2>Introduction</h2>
      <p>
        As AI models become more complex and are applied to higher-risk domains,
        there is an increasing need to better understand model behavior.
        Increasing model interpretability enables transparency, accountability,
        and responsibility in model usage. By studying how a model makes certain
        decisions, one can better understand how problematic outcomes arise or
        even predict them. Furthermore, interpretability aids in model iteration
        and development. By allowing developers to directly identify model
        drawbacks and vulnerabilities, interpretable models allow developers to
        make precise adjustments to improve performance.
      </p>

      <p>
        One approach to addressing the concern of model transparency is
        Mechanistic Interpretability (MI). MI seeks to reverse engineer
        computational processes learned by the network. In practice, this means
        to identify the specific algorithms and representations the network uses
        to produce its outputs.
      </p>

      <p>
        By understanding specific representations learned by the model,
        developers can perform targeted intervention on the model to modify
        specific behaviors while maintaining overall functionality. For
        instance, one may use MI to find that a certain direction in activation
        space corresponds to dishonest responses made by an LLM. Taking away the
        projection of the activation in this direction may therefore reduce
        dishonest behavior in the LLM.
      </p>

      <p>
        Furthermore, MI can also serve to verify the effectiveness of model
        architectures. For example, a frequent justification given for the CNN
        model architecture is that a convolution allows the model to identify
        specific local features within an image. Using MI, one can find whether
        the CNN is identifying such local features effectively and if so, what
        specific features a convolution is identifying.
      </p>

      <h2>Method</h2>
      <p>
        A major hypothesis in MI is that models represent features as basis
        directions in activation space. For instance, in image classification,
        this activation space can be the last layer of the model, where each
        feature is a category for classification and each basis direction
        corresponds to the output of each neuron. Output neuron 36 of the
        AlexNet model would correspondingly represent the
        &quot;terrapin-ness&quot; feature of the original input image. This idea
        can also be applied to hidden layers, where certain basis directions can
        represent the &quot;jaggedness&quot; or &quot;roughness&quot; etc. of
        the input image.
      </p>

      <p>
        Assuming this hypothesis, we can perform feature visualization by
        optimization. We can attempt to optimize an input image to maximize the
        value of a certain direction in activation space and gain insight into
        what characteristics this direction represents and what the model is
        learning to aid in producing its output. We apply this idea to the
        AlexNet model, trained on the ImageNet dataset. We begin by explaining
        how to produce feature visualizations that are interpretable, then
        proceed to perform feature visualization on different activation spaces.
      </p>

      <h3>Interpretable Feature Visualization</h3>
      <p>
        The most naive approach to feature visualization is to optimize an input
        image for certain neurons. However, we find that in most cases, just
        this approach alone is not enough to produce images that are
        interpretable. Certain shapes and textures can still be discerned from
        the visualization, but the image as a whole remains difficult to
        interpret due to high frequency. To address this, two approaches are
        used. Similar to Olah&apos;s article on feature visualization, all
        visualizations shown in this article use both transformation robustness
        and color decorrelation to improve the interpretability of
        visualizations.
      </p>

      <h4>Image Transformations</h4>
      <p>
        Features never occur in images in the exact same way. A terrapin&apos;s
        shell may be seen in an image from different distances, at different
        angles, and in different focus. Different terrapins would also have
        shells that can look slightly different due to genetic differences.
        Neurons in the model must respond to features regardless of these
        differences, and therefore, one may argue that an input image that
        maximizes the value of a neuron while robust to these differences can be
        said to be a closer representation of what the neuron is learning than
        an image that is not robust.
      </p>

      <p>
        Introducing image transformations prior to passing the image through the
        model can be interpreted as modeling such differences between different
        instances of features: a crop and resize can model a feature occurring
        at different distances and sizes, a rotation can model a feature
        occurring at different angles, and introducing jitter to the image can
        model a feature occurring in different focus. Doing so ensures that the
        produced visualization is robust to these transformations and therefore
        produces a more interpretable output.
      </p>

      <h4>Color Decorrelation</h4>
      <p>
        The natural encoding of an image using RGB color values has been shown
        to be highly correlated. An image with a high red value has a higher
        probability of having a high green and blue value. This results in some
        parts of the data being over emphasized and others underemphasized.
        Performing color decorrelation on the image prior to input has been
        shown to reduce high frequency noise.
      </p>

      <div className="flex flex-wrap gap-4 my-6 justify-start">
        <div className="flex flex-col items-center">
          <Image
            src="/feat-viz/naive.png"
            alt="Naive feature visualization without transformations"
            width={280}
            height={280}
            className="rounded flex-shrink-0"
            style={{ width: '280px', height: '280px' }}
          />
          <p className="text-sm text-foreground-secondary mt-2 text-center">
            Naive
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/feat-viz/tr.png"
            alt="Feature visualization with image transformations"
            width={280}
            height={280}
            className="rounded flex-shrink-0"
            style={{ width: '280px', height: '280px' }}
          />
          <p className="text-sm text-foreground-secondary mt-2 text-center">
            Transformations
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/feat-viz/dec.png"
            alt="Feature visualization with color decorrelation"
            width={280}
            height={280}
            className="rounded flex-shrink-0"
            style={{ width: '280px', height: '280px' }}
          />
          <p className="text-sm text-foreground-secondary mt-2 text-center">
            Color Decorrelation
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/feat-viz/tr+dec.png"
            alt="Feature visualization with both transformations and color decorrelation"
            width={280}
            height={280}
            className="rounded flex-shrink-0"
            style={{ width: '280px', height: '280px' }}
          />
          <p className="text-sm text-foreground-secondary mt-2 text-center">
            Both
          </p>
        </div>
      </div>

      <h3>Optimization Objectives</h3>
      <p>
        Different optimization objectives can expose different aspects of what
        the model is learning and in which neurons or layers. The AlexNet
        architecture comprises of 5 convolutions followed by 3 fully connected
        layers, where the last layer is the final output of the model. We
        optimize by maximizing the activations of individual channels in
        convolutional layers and neurons within linear layers and comparing the
        resulting feature visualizations. We use entire channels in
        convolutional layers since the global image is what affects the output
        of the entire channel, while only local parts of an image affects the
        output of a neuron in convolutional layers. Meanwhile, the global image
        also affects output of individual neurons in linear layers. In this
        sense, we see channels in convolutional layers as similar to individual
        neurons in linear layers. By doing so, we can not only determine what
        specific features are learned by the model, but also by which neuron and
        how deep in the model the feature is detected.
      </p>

      <p>
        Other optimization objectives may optimize by groups of neurons, such as
        two specific neurons within the same layer. This can help to determine
        how the model uses interactions between neurons to learn about the
        input. We can also seek to minimize a specific neuron, which can help to
        determine how the model may use the same neuron in different ways.
      </p>

      <h2>Results</h2>
      <p>
        Our findings affirm current hypotheses about the hierarchical nature of
        CNNs and also show evidence of more complex phenomena, such as
        polysemanticality, which provide evidence for modern theories of feature
        representation such as superposition.
      </p>

      <h3>Hierarchical Feature Detection</h3>
      <p>
        Consistent with general interpretations of CNN models, we find that the
        complexity of features detected by convolutional layers increase as a
        function of layer depth.
      </p>

      <div>
        <p>
          <strong>Convolutional Layer 1</strong>: Detects simple colors or
          edges, such as diagonal lines of varying thickness colors. Note that
          channels 0 and 2 show essentially the same texture with just the lines
          going in different directions. This demonstrates that channels are not
          robust to rotations in the input image.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 my-6 justify-start">
        <Image
          src="/feat-viz/conv1-0.png"
          alt="Conv1 Channel 0"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv1-1.png"
          alt="Conv1 Channel 1"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv1-2.png"
          alt="Conv1 Channel 2"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv1-3.png"
          alt="Conv1 Channel 3"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
      </div>

      <div>
        <p>
          <strong>Convolutional Layer 2</strong>: Still detects low level
          textures, but more complex than that of convolutional layer 1. In
          particular, more colors are involved, and the textures appear to be of
          slightly larger scale (this should be expected as the second layer
          convolves over the first layer, so each neuron should naturally
          respond to a larger group of pixels in the original image).
        </p>
      </div>

      <div className="flex flex-wrap gap-4 my-6 justify-start">
        <Image
          src="/feat-viz/conv2-0.png"
          alt="Conv2 Channel 0"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv2-1.png"
          alt="Conv2 Channel 1"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv2-2.png"
          alt="Conv2 Channel 2"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv2-3.png"
          alt="Conv2 Channel 3"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
      </div>

      <div>
        <p>
          <strong>Convolutional Layer 3</strong>: Here, more complicated shapes
          arise and interestingly, clear differences can be seen even within the
          same optimized channel, as demonstrated by channel 0.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 my-6 justify-start">
        <Image
          src="/feat-viz/conv3-0.png"
          alt="Conv3 Channel 0"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv3-1.png"
          alt="Conv3 Channel 1"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv3-2.png"
          alt="Conv3 Channel 2"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv3-3.png"
          alt="Conv3 Channel 3"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
      </div>

      <div>
        <p>
          <strong>Convolutional Layer 4</strong>: Similar to convolutional layer
          3, feature visualizations produced by layer 4 show shapes and parts of
          objects.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 my-6 justify-start">
        <Image
          src="/feat-viz/conv4-0.png"
          alt="Conv4 Channel 0"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv4-1.png"
          alt="Conv4 Channel 1"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv4-2.png"
          alt="Conv4 Channel 2"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv4-3.png"
          alt="Conv4 Channel 3"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
      </div>

      <div>
        <p>
          <strong>Convolutional Layer 5</strong>: Features detected by layer 5
          also show shapes and parts of objects. Noticeably, these features are
          not directly more sophisticated than the features detected by layers 3
          and 4. Some channels, such as channel 2, show more complex features.
          Other channels may simply show repeated patterns similar to that of
          layers 3 and 4. Furthermore, channels in layer 5 appear to respond to
          a sparser set of features than other layers, in the sense that for
          many images, a channel may not respond at all and only when a specific
          rare feature occurs does the channel have a significant non-zero
          activation.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 my-6 justify-start">
        <Image
          src="/feat-viz/conv5-1.png"
          alt="Conv5 Channel 1"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv5-2.png"
          alt="Conv5 Channel 2"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv5-3.png"
          alt="Conv5 Channel 3"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/conv5-4.png"
          alt="Conv5 Channel 4"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
      </div>

      <h3>Polysemanticality</h3>
      <p>
        In our investigation of the later linear layers, we find evidence of
        polysemanticality, where single neurons learn to represent multiple
        unrelated concepts. This is necessary due to the model attempting to
        represent more features in the same activation space than the
        dimensionality of the space allows.
      </p>

      <p>
        In particular, in the first linear layer, neuron 256 demonstrates this
        complexity. When optimizing for this neuron&apos;s activation, we find
        that it responds to both reddish fur and pointed ears characteristic of
        a fox and also avian features with other colorful furs and wings.
      </p>

      <div className="flex flex-wrap gap-4 my-6 justify-start">
        <Image
          src="/feat-viz/lin1-256-1.png"
          alt="Linear layer 1, neuron 256 visualization 1"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
        <Image
          src="/feat-viz/lin1-256-2.png"
          alt="Linear layer 1, neuron 256 visualization 2"
          width={280}
          height={280}
          className="rounded flex-shrink-0"
          style={{ width: '280px', height: '280px' }}
        />
      </div>

      <p>
        Most interestingly, the neuron responds to these features in multiple
        different ways, demonstrating a high degree of abstraction. Further
        optimization runs show that the neuron&apos;s concept of &quot;fox&quot;
        or &quot;bird&quot; is not tied to a single composition. The
        visualization could synthesize a zoomed-in view of a fox&apos;s face or
        an image of a full-body fox and also a close-up of a bird head or a
        bird&apos;s full-body view.
      </p>

      <p>
        We interpret this as evidence that the neuron is not simply a
        template-matcher for a specific image but has learned a more abstract,
        invariant representation. It is part of a circuit that detects a
        high-level concept that is general enough to apply to both classes and
        robust enough to activate regardless of scale, composition, or even the
        posture of the animal in the image. This stands in stark contrast to the
        features learned in earlier convolutional layers, which were tied to
        specific textures or patterns. The linear layers appear to use these
        polysemantic neurons to build a highly flexible semantic space where
        abstract concepts are robustly represented.
      </p>

      <h2>Conclusion</h2>
      <p>
        This investigation employs feature visualization to reverse-engineer the
        features learned by AlexNet, providing evidence for established
        theories. Our analysis confirms the established theory of hierarchical
        feature detection by Convolutional Neural Networks. Additionally, we
        find evidence of polysemanticality and superposition, by identifying
        neurons that seem to respond to multiple unrelated features. These
        findings establish mechanistic interpretability as a powerful method for
        understanding the internal algorithms of neural networks and verifying
        the principles that make specific architectures effective.
      </p>
    </>
  ),
};

export default post;

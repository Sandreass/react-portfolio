import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Левая часть - Текст */}
        <div className="md:w-1/2">
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
            Praesent ultricies, purus vel tincidunt tincidunt, turpis arcu fringilla lacus, 
            vel finibus eros sem ac leo. Donec vulputate pellentesque ante. 
            Curabitur semper risus eget arcu aliquet, vel consectetur ipsum placerat.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A tempore dignissimos neque, provident quas delectus, tempora explicabo, autem eius esse facilis quam quod repellat. Animi rerum iusto at cum placeat!
          </p>
          <p className="text-gray-300 mb-6">
            Sed vestibulum scelerisque nunc, vel lacinia magna maximus et. 
            Fusce eleifend vel quam ut ultricies. Nullam tincidunt sagittis magna, 
            id tempor massa. In hac habitasse platea dictumst. Aliquam quis dui vel 
            augue vulputate rutrum non at dui. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, inventore accusantium? Voluptas totam possimus, dolore deserunt aut magni nisi iste adipisci ea officia eum sed? Placeat voluptate ad natus dignissimos?
          </p>
          
          {/* Кнопка скачать CV */}
          <a 
            href="/cv.pdf" 
            download 
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded font-medium hover:bg-gray-200 transition-colors"
          >
            Download CV
          </a>
        </div>
        
        {/* Правая часть - Фото */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/coding.jpg" 
              alt="Andreas - About Me" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
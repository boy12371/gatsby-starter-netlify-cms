import React from "react";
import { v4 } from "uuid";
import { TestimonialsProps } from "../common/interfaces";

export const Testimonials: React.SFC<TestimonialsProps> = ({
    testimonials
}) => (
    <div>
        {testimonials.map(testimonial => (
            <article key={v4()} className="message">
                <div className="message-body">
                    {testimonial.quote}
                    <br />
                    <cite> – {testimonial.author}</cite>
                </div>
            </article>
        ))}
    </div>
);

export default Testimonials;

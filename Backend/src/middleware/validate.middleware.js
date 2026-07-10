import { ZodError } from "zod";

const validate = (schema, source = "body") => 
{
    return (req, res, next) => {
        try 
        {
            req.validatedData = schema.parse(req[source]);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                return res.status(400).json({
                    success: false,
                    message: error.issues[0].message,
                });
            }

            next(error);
        }
    };
};

export default validate;
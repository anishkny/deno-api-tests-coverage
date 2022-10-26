import { serve } from "std/http/server.ts";

import { requestHandler } from "./server.ts";

serve(requestHandler);

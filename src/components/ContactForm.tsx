import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'İsim en az 2 karakter olmalıdır.',
  }),
  email: z.string().email({
    message: 'Lütfen geçerli bir e-posta adresi girin.',
  }),
  message: z.string().min(10, {
    message: 'Mesaj en az 10 karakter olmalıdır.',
  }),
});
export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success('Mesajınız Gönderildi!', {
      description: "Bizimle iletişime geçtiğiniz için teşekkür ederiz. En kısa sürede size geri döneceğiz.",
    });
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>İsim</FormLabel>
                <FormControl>
                  <Input placeholder="Adınız" {...field} className="bg-white/5 border-white/10 focus:ring-brand-green focus:border-brand-green" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-posta</FormLabel>
                <FormControl>
                  <Input placeholder="e-postanız@example.com" {...field} className="bg-white/5 border-white/10 focus:ring-brand-green focus:border-brand-green" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mesajınız</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Size nasıl yardımcı olabiliriz?"
                  className="resize-none bg-white/5 border-white/10 focus:ring-brand-green focus:border-brand-green"
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-brand-green text-background font-bold hover:bg-brand-green/90 shadow-glow hover:shadow-glow-lg transition-all duration-300"
          size="lg"
        >
          Mesajı Gönder
        </Button>
      </form>
    </Form>
  );
}